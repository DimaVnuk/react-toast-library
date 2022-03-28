import React from 'react';
import { Portal } from '../../portals/Portal';

export const ToastContainerPortal = (props) => {
   return <Portal>{props.children}</Portal>;
};
