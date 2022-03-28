import React from 'react';
import { Toast } from '../components/Toast/Toast';
import { ToastContainerPortal } from '../components/Toast/ToastContainerPortal';
const errorIcon = require('../assets/svg/error.svg') as string;
const infoIcon = require('../assets/svg/info.svg') as string;
const warningIcon = require('../assets/svg/warning.svg') as string;
const successIcon = require('../assets/svg/success.svg') as string;
import {
   WHITE,
   GREEN,
   RED,
   PURPLE,
   BLACK,
   YELLOW,
   GRAY,
   SUCCESS,
   ERROR,
   INFO,
   WARNING,
   SUCCESS_TITLE,
   WARNING_TITLE,
   ERROR_TITLE,
   INFO_TITLE,
   CUSTOM_TITLE,
} from '../constants/index';

let toastList: string[] = [];

class Singleton {
   toastList: string[] | undefined;
   private static singleton: Singleton;
   constructor(toastList: string[]) {
      if (Singleton.singleton) {
         return Singleton.singleton;
      }
      Singleton.singleton = this;
      this.toastList = toastList;
   }

   getId() {
      return Math.floor(Math.random() * 101);
   }

   getTitleName(prop) {
      switch (prop.type) {
         case SUCCESS:
            return SUCCESS_TITLE;
         case ERROR:
            return ERROR_TITLE;
         case INFO:
            return INFO_TITLE;
         case WARNING:
            return WARNING_TITLE;
         default:
            return CUSTOM_TITLE;
      }
   }

   getTitleColor(prop) {
      switch (prop.type) {
         case SUCCESS:
            return WHITE;
         case ERROR:
            return WHITE;
         case INFO:
            return WHITE;
         case WARNING:
            return BLACK;
         default:
            return BLACK;
      }
   }

   getBackgroundColor(prop) {
      switch (prop.type) {
         case SUCCESS:
            return GREEN;
         case ERROR:
            return RED;
         case INFO:
            return PURPLE;
         case WARNING:
            return YELLOW;
         default:
            return GRAY;
      }
   }

   getIcon(prop) {
      switch (prop.type) {
         case SUCCESS:
            return successIcon;
         case ERROR:
            return errorIcon;
         case INFO:
            return infoIcon;
         case WARNING:
            return warningIcon;
         default:
            return successIcon;
      }
   }

   getProp(desc, prop) {
      return {
         ...prop,
         id: prop.toastId || this.getId(),
         description: desc || 'Description',
         toastPadding: prop.padding || '',
         title: this.getTitleName(prop),
         titleColor: this.getTitleColor(prop),
         descColor: this.getTitleColor(prop),
         backgroundColor: this.getBackgroundColor(prop),
         icon: this.getIcon(prop),
      };
   }

   showToast(desc, prop) {
      if (toastList.length < 5) {
         toastList = [...toastList, this.getProp(desc, prop)];
      }

      return (
         <ToastContainerPortal>
            <Toast
               toastList={toastList}
               position={prop.position}
               autoDelete={prop.autoDelete}
               autoDeleteTime={prop.delay}
               animation={prop.animation}
            />
         </ToastContainerPortal>
      );
   }
}

export const toast = new Singleton(toastList);
