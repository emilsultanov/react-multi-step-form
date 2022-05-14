export interface IStep {
  id: number | string,
  label: string;
  stepForm: () => JSX.Element
}

