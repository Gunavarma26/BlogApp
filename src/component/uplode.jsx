// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import { Upload } from 'antd';

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

// const AppUpload = () => {
//   const [previewImage, setPreviewImage] = useState('');
//   const [fileList, setFileList] = useState([]);

//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//   };

//   const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );

//   return (
//     <>
//       <Upload
//         action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//         listType="picture-card"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//       >
//         {fileList.length >= 1 ? null : uploadButton}
//       </Upload>

//       {previewImage && (
//         <div>
//           <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
//         </div>
//       )}
//     </>
//   );
// };

// export default AppUpload;
