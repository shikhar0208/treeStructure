import { v4 as uuidv4 } from 'uuid';

export const structureData = [
  {
    id: uuidv4(),
    name: 'root 1',
    isFolder: true,
    items: [
      {
        id: uuidv4(),
        name: 'child-1-1',
        isFolder: true,
        items: [
          {
            id: uuidv4(),
            name: 'file1.html',
            isFolder: false,
          },
          {
            id: uuidv4(),
            name: 'file.doc',
            isFolder: false,
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'child.xls',
        isFolder: false,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'root 2',
    isFolder: true,
    items: [
      {
        id: uuidv4(),
        name: 'child2.xls',
        isFolder: false,
      },
      {
        id: uuidv4(),
        name: 'child-2',
        isFolder: true,
        items: [
          { id: uuidv4(), name: 'file2.html', isFolder: false },
          { id: uuidv4(), name: 'file2.doc', isFolder: false },
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'rootfile.xls',
    isFolder: false,
  },
];
