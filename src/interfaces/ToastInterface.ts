export interface IToast {
	splice(arg1: number);
	length: number;
	findIndex(arg0: (i) => boolean);
	animation: string;
	autoDelete: boolean;
	backgroundColor: string;
	delay: number;
	descColor: string;
	description: string;
	icon: string;
	id: number;
	position: string;
	title: string;
	titleColor: string;
	toastPadding: string;
	type: string;
  }
  
  export interface IPropsType {
	toastList: IToast[] | string[] | number[];
	position: string;
	autoDelete: boolean;
	autoDeleteTime: number;
	animation?: number;
  }