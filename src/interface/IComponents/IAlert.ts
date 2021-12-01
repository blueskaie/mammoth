interface IAlert {}

export type IAlertGetProps = {
  message: string;
  alert: boolean;
  alertType?: string;
  hideAlert: (isOpen: boolean) => void;
};

export default IAlert;
