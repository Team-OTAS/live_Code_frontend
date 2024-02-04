import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SuccessBox({ message }) {
  const navigate = useNavigate();
  // console.log(message);
  useEffect(() => {
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: message,
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then(() => {
      navigate("/");
    });
  }, [message]);

  return;
}

export default SuccessBox;
