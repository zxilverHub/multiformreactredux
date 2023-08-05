import { createSlice } from "@reduxjs/toolkit";


function updateAddOns(addOns) {
    const newAddOns = []
    const adds = Object.keys(addOns)
    adds.forEach(add => {
        if(addOns[add].added){
            newAddOns.push({
                addOnsName: addOns[add].addName,
                addOnsPrie: addOns[add].addPrice
            })
        }
    })
    return newAddOns
}

function pickAddOns(addOns, payload) {
    if(payload === 'service') {
        return { ...addOns, onlineService: { ...addOns.onlineService, added: !addOns.onlineService.added} }
    } else if( payload === 'storage') {
        return { ...addOns, storage: { ...addOns.storage, added: !addOns.storage.added} }
    } else if(payload === 'profile') {
        return { ...addOns, customizableProfile: { ...addOns.customizableProfile, added: !addOns.customizableProfile.added} }
    }
}

function computeTotal(span, price, adds) {
    let total = price;
    adds.forEach(add=> {
        total += add.addOnsPrie
    })
    return (span==='Monthly'? total: total*10)
}

export const userInfo = createSlice({
    name: "user",

    initialState: { value: {
        currentForm: 0,

        personanlInfo: {
            name: null,
            email: null,
            phoneNumber: null,
            validInfo: false
        },

        plan: {
            level: {
                levelName: "Arcade",
                levelSubcribe: 9
            },
            isMonthly: true
        },

        addOns: {
            onlineService: {
                addName: 'Online Service',
                addPrice: 1,
                added: false
            },
            storage: {
                addName: 'Larger Storage',
                addPrice: 2,
                added: false
            },
            customizableProfile: {
                addName: 'Cuztomisable profile',
                addPrice: 2,
                added: false
            },
        },

        summary: {
            sLevel: null,
            sSpan: null,
            sSubcribe: null,
            sAddOns: [],
            sTotal: null
        },
        sTotal: 0,
        confirmed: false
    } },

    reducers: {
        currentFormAction: (state, action) => {
            state.value.currentForm = action.payload;
        },

        yourInfo: (state, action) => {
            state.personanlInfo = action.payload
        },

        selectPlan: (state, action) => {
            state.value.plan.level = action.payload
        },

        plaSpanToggle: (state) => {
            state.value.plan.isMonthly = !state.value.plan.isMonthly
        },

        addOnsAction: ( state, action ) => {
            state.value.addOns = pickAddOns(state.value.addOns, action.payload)
        },

        validateinfo: (state, action) => {
            state.value.personanlInfo.validInfo = action.payload
        },

        calculateSummary: (state) => {
            state.value.summary = {
                sLevel: state.value.plan.level.levelName,
                sSpan: state.value.plan.isMonthly ? "Monthly" : "Yearly",
                sSubcribe: state.value.plan.level.levelSubcribe,
                sAddOns: updateAddOns(state.value.addOns)
            }
            state.value.sTotal = computeTotal(state.value.summary.sSpan, state.value.summary.sSubcribe, state.value.summary.sAddOns)
        },
        setConfirm: (state) => {
            state.value.confirmed = true
        }

    }
})

export const { setConfirm, yourInfo, selectPlan, addOnsAction, calculateSummary, currentFormAction, validateinfo, plaSpanToggle } = userInfo.actions;
export default userInfo.reducer