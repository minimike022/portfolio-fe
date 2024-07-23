import { axiosInstance } from "./axiosInstance";
import { ref } from "vue";


export const send_email = (response_form) => {
    console.log(response_form.value)
    axiosInstance.post(`/send-email`, response_form.value).then(res => {
        console.log(res)
    })
}