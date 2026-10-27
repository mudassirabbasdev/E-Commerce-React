// All pop-ups of the site live here (SweetAlert2), so every page looks and behaves the same.
// Pages never import 'sweetalert2' directly: they call one of the small helpers below.
import Swal from 'sweetalert2'

const BRAND_DARK = '#163d33'
const BRAND_MINT = '#60cfaa'

// Shared look for dialogs (confirm, success, error)
const dialog = Swal.mixin({
  confirmButtonColor: BRAND_DARK,
  cancelButtonColor: '#6b7280',
  iconColor: '#4a8f78',
  customClass: {
    popup: 'verdora-swal',
    confirmButton: 'verdora-swal-btn',
    cancelButton: 'verdora-swal-btn',
  },
})

// Small corner notification that closes itself
const toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2200,
  timerProgressBar: true,
  iconColor: BRAND_MINT,
  customClass: { popup: 'verdora-toast' },
  didOpen: (el) => {
    // Pause the timer while the mouse is over the toast
    el.addEventListener('mouseenter', Swal.stopTimer)
    el.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

/* ---------- Toasts (quick feedback, no click needed) ---------- */
export const toastSuccess = (title, text) => toast.fire({ icon: 'success', title, text })
export const toastInfo = (title, text) => toast.fire({ icon: 'info', title, text })

/* ---------- Dialogs ---------- */
export const showSuccess = (title, text) =>
  dialog.fire({ icon: 'success', title, text, confirmButtonText: 'Great' })

export const showError = (title, text) =>
  dialog.fire({ icon: 'error', title, text, confirmButtonText: 'Try again', iconColor: '#dc2626' })

// Returns true when the user clicks the confirm button
export const confirmAction = async ({ title, text, html, confirmText = 'Yes', icon = 'warning' }) => {
  const result = await dialog.fire({
    icon,
    title,
    text,
    html,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    focusCancel: true,
  })
  return result.isConfirmed
}
