import styled from 'styled-components';

export interface StyledCardProps {
   animation?: number;
}

export const ToastWrapper = styled.div<StyledCardProps>`
  .notification-container {
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;
    z-index: 999999;
  }
  .top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: ${(props) => (props.animation ? props.animation : 'toast-in-right')}
      0.7s;
  }
  .bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: ${(props) => (props.animation ? props.animation : 'toast-in-right')}
      0.7s;
  }
  .top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: ${(props) => (props.animation ? props.animation : 'toast-in-left')}
      0.7s;
  }
  .bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: ${(props) => (props.animation ? props.animation : 'toast-in-left')}
      0.7s;
  }

 
  .notification {
    width: 670px;
    max-height: 180px;
    margin: 0 0 6px;
    padding: 30px;
    margin-bottom: 15px;

    transition: 0.3s ease;
    position: relative;
    pointer-events: auto;
    overflow: hidden;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 4px 4px 8px #00000029;
    border-radius: 24px;
    
    opacity: 0.9;
    background-position: 15px;
    background-repeat: no-repeat;
  }
  .notification:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }
  .notification-title {
    font-family: Verdana;
    font-weight: 700;
    font-size: 24px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 6px;
    width: 300px;
    height: 18px;
  }
  .notification-message {
    height: 18px;
    margin-left: -1px;
    margin-top: 15px;
    font-family: Verdana;
    font-weight: bold;
    font-size: 15px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .notification-image {
    margin-right: 15px;
    margin-bottom: 15px;
    margin-top: 7px;
    float: left;
  }
  .notification-image img {
    width: 30px;
    height: 30px;
  }
  .toast {
    height: 50px;
    width: 365px;
    color: black;
  }
  .close {
    font-weight: bolder;
    font-size: 20px;
  }
  .notification-container button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-weight: bolder;
    color: #fff;
    outline: none;
    border: none;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.8;
    line-height: 1;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
  }
  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes toast-from-top {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes toast-from-bottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .yellow {
    background-color yellow;
	
  }

  .green {
    background-color: green;
  }
  .red {
    background-color: red;

  }
  .purple {
    background-color: purple;

  }
  .black{
	color:black
  }
  .white{
	color:white
  }
`;
