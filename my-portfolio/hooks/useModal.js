import Link from 'next/Link';
import {useState} from 'react';
import Router from 'next/router'

export const useModal = (initialValue = flase) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => setIsOpen(true);

    const closeModal = () =>setIsOpen(false);

    return [isOpen, openModal, closeModal];
}