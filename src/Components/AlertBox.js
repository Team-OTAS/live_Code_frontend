import React, { useEffect } from "react";
import Swal from "sweetalert2";

const AlertBox = ({ message }) => {
  console.log(message);
  useEffect(() => {
    // This effect runs when the component mounts
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  }, [message]);

  return;
};

export default AlertBox;
