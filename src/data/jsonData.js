// import { v4 as uuidv4 } from 'uuid';

// export const structureData = [
//   {
//     id: uuidv4(),
//     name: 'root 1',
//     isFolder: true,
//     items: [
//       {
//         id: uuidv4(),
//         name: 'child-1-1',
//         isFolder: true,
//         items: [
//           {
//             id: uuidv4(),
//             name: 'file1.html',
//             isFolder: false,
//           },
//           {
//             id: uuidv4(),
//             name: 'file.doc',
//             isFolder: false,
//           },
//         ],
//       },
//       {
//         id: uuidv4(),
//         name: 'child.xls',
//         isFolder: false,
//       },
//     ],
//   },
//   {
//     id: uuidv4(),
//     name: 'root 2',
//     isFolder: true,
//     items: [
//       {
//         id: uuidv4(),
//         name: 'child2.xls',
//         isFolder: false,
//       },
//       {
//         id: uuidv4(),
//         name: 'child-2',
//         isFolder: true,
//         items: [
//           { id: uuidv4(), name: 'file2.html', isFolder: false },
//           { id: uuidv4(), name: 'file2.doc', isFolder: false },
//         ],
//       },
//     ],
//   },

//   {
//     id: uuidv4(),
//     name: 'rootfile.xls',
//     isFolder: false,
//   },
// ];

export const structureData = {
  CONVEYANCING: {
    MORTGAGE_VARIATION: {
      FORM: {
        0: {
          contentName: 'Blank_Letter',
          contentType: 'docx',
          isFile: true,
        },
        1: {
          contentName: 'Client_Female_Single_Letter_encl_copies_and_account',
          contentType: 'docx',
          isFile: true,
        },
      },
      LETTER: {
        0: {
          contentName: 'Accountant_letter',
          contentType: 'docx',
          isFile: true,
        },
        1: {
          contentName: 'Client_Blank_Letter',
          contentType: 'docx',
          isFile: true,
        },
        2: {
          contentName: 'General_letter',
          contentType: 'docx',
          isFile: true,
        },
      },
      NORMAL: {
        0: {
          contentName: 'Agent_Blank_Letter',
          contentType: 'docx',
          isFile: true,
        },
        1: {
          contentName: 'File_Particulars_Family_Law',
          contentType: 'docx',
          isFile: true,
        },
        2: {
          contentName: 'File_Particulars_Lessee',
          contentType: 'docx',
          isFile: true,
        },
        3: {
          contentName: 'Settlement_instructions_NO_MORTG',
          contentType: 'docx',
          isFile: true,
        },
      },
    },
  },
};
