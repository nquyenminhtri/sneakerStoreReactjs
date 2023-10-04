<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

$dsLoaiSanPham = [
  [
    'ten'=> 'Loai san pham 1',
    'ds_san_pham'=> [
      [
        'hinh_anh'=> '',
        'ten'=> 'San pham 11',
        'gia'=> 1000
      ],
      [
        'hinh_anh'=> '',
        'ten'=> 'San pham 12',
        'gia'=> 2000
      ],
      [
        'hinh_anh'=> '',
        'ten'=> 'San pham 13',
        'gia'=> 2000
      ]
    ]
  ],
  [
    'ten'=> 'Loai san pham 2',
    'ds_san_pham'=> [
      [
        'hinh_anh'=> '',
        'ten'=> 'San pham 21',
        'gia'=> 3000
      ],
      [
        'hinh_anh'=> '',
        'ten'=> 'San pham 22',
        'gia'=> 4000
      ]
    ]
  ]
];

echo json_encode($dsLoaiSanPham);