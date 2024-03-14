<template>
    <div class="component">
            <div class="bg1 container"  >
                <hr>
                <div class="row">
                <div class="col-2 ml-1">
                    <img class="logo" width="80" height="80" src="https://st3.depositphotos.com/1364916/14850/v/450/depositphotos_148504285-stock-illustration-book-blue-love-heart-logo.jpg" alt="">
                </div>
                <ul type="none" class="nav justify-content-center col-9">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trang Chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./xemDG.vue">Quản Lý Độc Giả</a>
                    </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Cập Nhật Tài Nguyên</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Xem Tài Nguyên</a></li>
                        <li><a class="dropdown-item" href="#">Thêm Tài Nguyên</a></li>
                        <li><a class="dropdown-item" href="#">Chỉnh Sửa Tài Nguyên</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Thể Loại</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Văn Học</a></li>
                        <li><a class="dropdown-item" href="#">Khoa Học</a></li>
                        <li><a class="dropdown-item" href="#">Lịch Sử</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Thống Kê</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Độc Giả Đang Mượn Sách</a></li>
                        <li><a class="dropdown-item" href="#">Sách Quá Hạn Trả</a></li>
                        <li><a class="dropdown-item" href="#">Sách Trong Kho</a></li>
                        <li><a class="dropdown-item" href="#">Sách Trên Kệ</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./xemDG.vue">Xem Độc Giả</a>
                </li>
              
                </ul>
            </div>
            </div>
        <div>
            <img src="https://gotrangtri.vn/wp-content/uploads/2018/11/thu-vien-dep-12.jpg" alt="" height="250" width="100%" style="image-rendering: pixelated;">
        </div>
    </div>
</template>

<script>
</script>
<style>
.bg1{
    display: justify-content-center;
    text-align: center;
    background-color: rgb(186, 221, 249);
}

li a {
    list-style-type: none;
    display: inline;
    margin: 3px;
    text-decoration: none;
}

.logo {
    display: flex;
    border-radius: 50%;
}
</style>
