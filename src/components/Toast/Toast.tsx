import React, { useState, useEffect, useCallback } from 'react';

import { ToastWrapper } from '../../styled-components/styleGlobal';
import ErrorBoundary from '../../layout/ErrorBoundary/ErrorBoundary';
import { IPropsType } from '../../interfaces/ToastInterface';

export const Toast = ({
   toastList,
   position,
   autoDelete,
   autoDeleteTime,
   animation,
   background,
   color,
}: IPropsType) => {
   const [list, setList] = useState([]);
   useEffect(() => {
      setList([...toastList]);
   }, [toastList]);

   useEffect(() => {
      const interval = setInterval(() => {
         if (autoDelete && toastList.length && list.length) {
            deleteToast(toastList[0]);
         }
      }, autoDeleteTime);

      return () => {
         clearInterval(interval);
      };
   }, [toastList, autoDelete, autoDeleteTime, list]);

   const deleteToast = (id) => {
      const listItemIndex = list.findIndex((i) => i.id === id);
      const toastListItem = toastList.findIndex((i) => i.id === id);
      list.splice(listItemIndex, 1);
      toastList.splice(toastListItem, 1);
      setList([...list]);
   };

   const renderToast = useCallback(
      () =>
         list.map((toast) => {
            return (
               <div key={toast.id + 1} className={`notification toast ${position} ${background}`}>
                  <button onClick={() => deleteToast(toast.id)} className={`${color}`}>
                     <span className={`close ${color}`}>X</span>
                  </button>
                  <div className="notification-image">
                     <img src={toast.icon} />
                  </div>
                  <div>
                     <p className={`notification-title  ${color}`}>{toast.title}</p>
                     <p className={`notification-message  ${color}`}>{toast.description}</p>
                  </div>
               </div>
            );
         }),
      [list]
   );

   return (
      <ErrorBoundary>
         <ToastWrapper animation={animation}>
            <div className={`notification-container ${position}`}>{renderToast()}</div>
         </ToastWrapper>
      </ErrorBoundary>
   );
};
