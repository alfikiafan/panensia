<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <header id="header" class="position-relative">
        <div class="headerHolderCol pt-lg-4 pb-lg-5 py-3">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12">
                        <span class="txt d-block running-text">
                            Welcome to Panensia || penyuplai terbaik untuk kebutuhan rempah-rempah
                            dan bumbu masak yang diproduksi sendiri, memberikan aroma dan rasa
                            terbaik untuk masakan Anda.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="headerHolder container pt-lg-5 pb-lg-7 py-4">
            <div class="row">
                <div class="col-6 col-sm-2">
                    <!-- mainLogo -->
                    <div class="logo">
                        <a href="home.html"
                            ><img
                                src="https://www.panensia.co.id/wp-content/uploads/2023/11/logo-panensia-rev.png"
                                alt="Botanical"
                                class="img-fluid"
                        /></a>
                    </div>
                </div>
                <div class="col-6 col-sm-7 col-lg-8 static-block">
                    <!-- mainHolder -->
                    <div class="mainHolder pt-lg-5 pt-3 justify-content-center">
                        <!-- pageNav2 -->
                        <nav
                            class="navbar navbar-expand-lg navbar-light p-0 pageNav2 position-static"
                        >
                            <button
                                type="button"
                                class="navbar-toggle collapsed position-relative"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-expanded="false"
                            >
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav mx-auto text-uppercase d-inline-block">
                                    <li :class="{ 'nav-item active': route.path === '/' }">
                                        <RouterLink
                                            to="/"
                                            class="dropdown-toggle d-block"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            >Home</RouterLink
                                        >
                                    </li>
                                    <li
                                        :class="{
                                            'nav-item active':
                                                route.path === '/produk' ||
                                                route.path === '/detailproduk'
                                        }"
                                    >
                                        <RouterLink
                                            to="/produk"
                                            class="dropdown-toggle d-block"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            >Produk</RouterLink
                                        >
                                    </li>
                                    <li
                                        :class="{
                                            'nav-item active':
                                                route.path === '/berita' ||
                                                route.path === '/detailberita'
                                        }"
                                    >
                                        <RouterLink
                                            to="/berita"
                                            class="d-block"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            >Berita</RouterLink
                                        >
                                    </li>
                                    <li
                                        :class="{
                                            'nav-item active': route.path === '/tentangKami'
                                        }"
                                    >
                                        <RouterLink to="/tentangKami" class="d-block"
                                            >Tentang Kami</RouterLink
                                        >
                                    </li>
                                    <!-- <li class="nav-item dropdown">
                                            <a class="dropdown-toggle d-block" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                                            <ul class="list-unstyled text-capitalize border-right border-bottom border-left dropdown-menu mt-0 py-0">
                                                <li class="d-block mx-0"><a href="blog.html">Blog Left Sidebar</a></li>
                                                <li class="d-block mx-0"><a href="blog-detail.html">Blog Detail</a></li>
                                            </ul>
                                        </li> -->
                                    <li :class="{ 'nav-item active': route.path === '/kontak' }">
                                        <RouterLink to="/kontak" class="d-block">Kontak</RouterLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="col-sm-3 col-lg-2">
                    <!-- wishListII -->
                    <ul class="nav nav-tabs wishListII pt-5 justify-content-end border-bottom-0">
                        <li class="nav-item ml-0">
                            <a class="nav-link icon-search" href="javascript:void(0);"></a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link position-relative icon-cart"
                                href="javascript:void(0);"
                                ><span class="num rounded d-block">2</span></a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link icon-profile" href="javascript:void(0);"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
