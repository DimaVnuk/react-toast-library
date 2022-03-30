import React from "react";
import { Toast } from "../components/Toast/Toast";
import { ToastContainerPortal } from "../components/Toast/ToastContainerPortal";
const errorIcon = require("../assets/svg/error.svg") as string;
const infoIcon = require("../assets/svg/info.svg") as string;
const warningIcon = require("../assets/svg/warning.svg") as string;
const successIcon = require("../assets/svg/success.svg") as string;
import { Color, Types, Title } from "../constants/index";

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
      case Types.Success:
        return Title.SuccessTitle;
      case Types.Error:
        return Title.ErrorTitle;
      case Types.Info:
        return Title.InfoTitle;
      case Types.Warning:
        return Title.WarningTitle;
      default:
        return Title.CustomTitle;
    }
  }

  getTitleColor(prop) {
    switch (prop.type) {
      case Types.Success:
        return Color.White;
      case Types.Error:
        return Color.White;
      case Types.Info:
        return Color.White;
      case Types.Warning:
        return Color.Black;
      default:
        return Color.Black;
    }
  }

  getBackgroundColor(prop) {
    switch (prop.type) {
      case Types.Success:
        return Color.Green;
      case Types.Error:
        return Color.Red;
      case Types.Info:
        return Color.Purple;
      case Types.Warning:
        return Color.Yellow;
      default:
        return Color.Gray;
    }
  }

  getIcon(prop) {
    switch (prop.type) {
      case Types.Success:
        return successIcon;
      case Types.Error:
        return errorIcon;
      case Types.Info:
        return infoIcon;
      case Types.Warning:
        return warningIcon;
      default:
        return successIcon;
    }
  }

  getProp(desc, prop) {
    return {
      ...prop,
      id: prop.toastId || this.getId(),
      description: desc || "Description",
      toastPadding: prop.padding || "",
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
          background={prop.background}
          color={prop.color}
        />
      </ToastContainerPortal>
    );
  }
}

export const toast = new Singleton(toastList);
