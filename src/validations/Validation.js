import * as yup from "yup"

const validations = yup.object().shape({
    name: yup.string()
        .required("Ad alanı boş bırakılamaz.")
        .min(2, "En az 2 karakter olmalıdır.")
})

export default validations