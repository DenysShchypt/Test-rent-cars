import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenModal: false,
    modalData: null,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, actions) {
            console.log(actions.payload);
            state.isOpenModal = true;
            state.modalData = actions.payload;
        },
        closeModal(state) {
            state.isOpenModal = false;
            state.modalData = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
