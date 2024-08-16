'use client';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const useImageUploader = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [replaceIndex, setReplaceIndex] = useState(null);

    const onDrop = (acceptedFiles) => {
        setUploadedImages((prevImages) => {
            const newImages = [...prevImages];
            if (replaceIndex !== null) {
                newImages[replaceIndex] = Object.assign(acceptedFiles[0], {
                    preview: URL.createObjectURL(acceptedFiles[0])
                });
                setReplaceIndex(null); // รีเซ็ตค่า replaceIndex
            } else {
                const mappedImages = acceptedFiles.map((file) =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                );
                newImages.push(...mappedImages);
            }
            return newImages;
        });
    };


    const replaceImage = (index) => {
        setReplaceIndex(index);
    };

    const removeImage = (index) => {
        setUploadedImages((prevImages) => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: true,
    });

    return { uploadedImages, getRootProps, getInputProps, removeImage, replaceImage };
};

export default useImageUploader;




