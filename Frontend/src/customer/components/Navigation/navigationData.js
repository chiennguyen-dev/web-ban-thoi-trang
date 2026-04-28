export const navigation = {
    pages: [
        { name: 'TRANG CHỦ', id: '/' },
      ],
    categories: [
      {
        id: 'woman',
        name: 'THỜI TRANG NỮ',
        featured: [
          {
            name: 'Hàng mới về',
            href: '/',
            imageSrc: 'https://hoangphucphoto.com/wp-content/uploads/2024/12/anh-tui-4.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Áo thun cơ bản',
            href: '/',
            imageSrc: 'https://hoangphucphoto.com/wp-content/uploads/2024/12/anh-tui-5.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'QUẦN ÁO',
            items: [
              { name: 'Áo', id:"women_shirt"},
              { name: 'Váy', id:"women_dress1" },
              { name: 'Đầm', id: 'women_dress2' },
              { name: 'Quần', id: 'women_trousers' },
              { name: 'Set đồ', id: 'outfit_set' },
              { name: 'Áo khoác', id: 'jacket' },
              { name: 'Đồ bộ', id: 'outfit' },
            ],
          },
          {
            id: 'phu_kien',
            name: 'PHỤ KIỆN',
            items: [
              { name: 'Túi', id: 'bag' },
              { name: 'Nón', id: 'hat' },
              { name: 'Nội y', id: 'lingerie' },
              { name: 'Khăn', id: 'towel' },
              { name: 'Cài áo', id: 'brooch' },
              { name: 'Thắt lưng', id: 'belt' },
              { name: 'Quần tất', id: 'tights' },
              { name: 'Giày', id: 'shoe' },
            ],
          },
          {
            id: 'thuong_hieu',
            name: 'THƯƠNG HIỆU',
            items: [
              { name: 'Rubies Rubies', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'bo_suu_tap',
        name: 'BỘ SƯU TẬP',
        featured: [
          {
            name: 'BST TẾT',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'KNITWEAR',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'bst_tet',
            name: 'BST TẾT',
            items: [
              { name: 'Áo dài tết', id: 'Tet_ao_dai' },
              
              
            ],
          },
          {
            id: 'knitwear',
            name: 'KNITWEAR',
            items: [
              { name: 'Dệt kim', id: 'knitting' },
             
            ],
          },
          
        ],
      },
    ],
  }