import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function WaitingBox() {
  const navigate = useNavigate();
  // console.log(message);
  useEffect(() => {
    let timerInterval;
    Swal.fire({
      title: `Please Wait Completing Process`,
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval);
      },
      backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `,
    });
  }, []);

  return;
}

export default WaitingBox;
