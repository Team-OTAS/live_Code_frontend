import React, { useEffect } from "react";
import Swal from "sweetalert2";

function SuccessBox({ message }) {
  console.log(message);
  useEffect(() => {
    let timerInterval;
    Swal.fire({
      title: message,
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  }, [message]);

  return;
}

export default SuccessBox;
