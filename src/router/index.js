import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";
import Products from "@/pages/Product/All.vue";
import Product from "@/pages/Product/Single.vue";
import Cart from "@/pages/Cart.vue";

import Categories from "@/pages/Category/All.vue";
import Category from "@/pages/Category/Single.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // meta: {
    //    title: 'Home Page - Example App',
    //    metaTags: [
    //      {
    //        name: 'description',
    //        content: 'The home page of our example app.'
    //      },
    //      {
    //        property: 'og:description',
    //        content: 'The home page of our example app.'
    //      }
    //    ]
    //  }
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/single-product/:id",
    name: "SingleProduct",
    component: Product,

  },

  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/single-category/:id",
    name: "SingleCategory",
    component: Category,
  },


  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
      document.getElementById('app').scrollIntoView();
  }
});


router.beforeEach((to, from, next) => {

  const SEO_description = document.querySelector('head meta[name="description"]');
  const SEO_keywords    = document.querySelector('head meta[name="keyword"]');

 

  const this_title       = to.params.title;
  const this_description = to.params.description;
  const this_keyword     = to.params.keyword;

  if(this_title){
    document.title = this_title;
  }else{
    document.title = process.env.VUE_APP_TITLE;
  }

  if(this_keyword){
    SEO_keywords.setAttribute('content',this_keyword);
  }else{
    SEO_keywords.setAttribute('content',process.env.VUE_APP_KEYWORD);
  }

  if(this_keyword){
    SEO_description.setAttribute('content',this_description);
  }else{
    SEO_description.setAttribute('content',process.env.VUE_APP_DESCRIPTION);
  }




  next();
})

export default router;