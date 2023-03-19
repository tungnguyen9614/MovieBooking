import { CHAIR_BOOKING, CHAIR_CANCEL, PAY } from "./type"

export const chairBookingAction = (payload) => {
    return {
        type: CHAIR_BOOKING,
        //object literal
        payload
    }
}

export const payChairAction = () => {
    return {
        type: PAY
    }
}

export const chairCancelAction = (payload) => {
    return {
        type: CHAIR_CANCEL,
        payload
    }
}