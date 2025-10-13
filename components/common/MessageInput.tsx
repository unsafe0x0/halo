import React from 'react'
import Button from './Button'
import { HiMicrophone } from 'react-icons/hi2'
import { IoImage } from 'react-icons/io5'

interface MessageInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onClick?: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ placeholder, onClick, value, onChange }) => {
    return (
        <div className='flex flex-col gap-2 w-full border border-border p-2.5 bg-card'>
            <div className='flex justify-center items-center gap-2 w-full border-b border-border pb-2'>
                <textarea name="" id="" className='resize-none outline-none text-sm font-normal flex-1' placeholder={placeholder} value={value} onChange={(e) => onChange?.(e.target.value)}></textarea>
                <Button onClick={onClick}>Send</Button>
            </div>
            <div className='flex items-center gap-2'>
                <button className='text-muted hover:text-secondary bg-card p-1 border border-border'>
                    <IoImage size={20} />
                </button>
                <button className='text-muted hover:text-secondary bg-card p-1 border border-border'>
                    <HiMicrophone size={20} />
                </button>
            </div>
        </div>
    )
}

export default MessageInput