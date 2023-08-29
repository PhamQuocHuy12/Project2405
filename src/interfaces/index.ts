export interface ILoginProps {
  email: string;
  password: string;
}

export interface IGlobalModal {
  open: ({ content, title }: { content: string; title: string }) => void;
}

export interface IContextProps {
  globalModal?: React.MutableRefObject<IGlobalModal | undefined>;
}
