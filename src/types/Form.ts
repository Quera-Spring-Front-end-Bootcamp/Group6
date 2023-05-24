export interface FormTypes extends React.FormHTMLAttributes<HTMLFormElement> {
  action: string;
  onSuccess: (data: any) => void | null;
  onError: (data: any) => void | null;
  children: string | JSX.Element | JSX.Element[];
}
