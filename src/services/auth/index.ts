import {
  getAuth,
  createUserWithEmailAndPassword,
  ConfirmationResult,
  sendEmailVerification,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithPhoneNumber,
} from "firebase/auth";
import { FirebaseApp } from "../../firebase";
import { ILoginProps } from "../../interfaces";

declare global {
  interface Window {
    confirmationResult: ConfirmationResult;
  }
}

const auth = getAuth(FirebaseApp);
const applicationVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "invisible",
  callback: (response: unknown) => {
    console.log(response);
  },
  "expired-callback": () => {},
});
const provider = new PhoneAuthProvider(auth);

export const createUser = async ({ email, password }: ILoginProps) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log({ userCredential });
    })
    .catch((error) => {
      console.log({ error });
      // ..
    });
};

// export const updateUser = async (
//   currentUser: User,
//   updatedUser: IRegisterProps
// ) => {
//   const { phoneNumber, displayName } = updatedUser;
//   const verificationId = await provider.verifyPhoneNumber(
//     phoneNumber,
//     applicationVerifier
//   );
//   const phoneCredential = PhoneAuthProvider.credential(
//     verificationId,
//     verificationCode
//   );
//   const update = Promise.all([
//     updatePhoneNumber(currentUser, phoneCredential),
//     updateProfile(currentUser, { displayName }),
//   ]);
// };

export const triggerPhoneVerification = async (phoneNumber: string) => {
  const verificationId = await provider.verifyPhoneNumber(
    phoneNumber,
    applicationVerifier
  );

  return verificationId;
};

export const confirmPhoneVerification = (
  verificationId: string,
  verificationCode: string,
  callBack: () => void
) => {
  const phoneCredential = PhoneAuthProvider.credential(
    verificationId,
    verificationCode
  );
  if (phoneCredential) {
    callBack();
  }
};

export const loginWithEmail = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log({ user });
      // ...
    })
    .catch((error) => {
      console.log({ error });
    });
};

export const loginWithPhoneNumber = (phoneNumber: string) => {
  signInWithPhoneNumber(auth, phoneNumber, applicationVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      console.log({ error });
    });
};

export const verifyPhoneNumberSignIn = (code: string) => {
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log({ user });
      // ...
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log({ error });
    });
};

export const verifyEmail = () => {
  if (auth.currentUser) {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  }
};
