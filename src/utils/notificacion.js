import Swal from "sweetalert2";

const notificacion = (icon, title) => {
    // msg : mensaje personalizado
    // icon : success|error|warning|info
    Swal.fire({
        position: "center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
    });
}

export default notificacion;