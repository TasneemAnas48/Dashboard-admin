import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login/Login.vue";

import ViewStores from "../views/Stores/ViewStores.vue";
import ViewStoresUnactive from "../views/Stores/ViewStoresUnactive.vue";
import Store from "../views/Stores/Store.vue";
import Product from "../views/Stores/Product.vue";

import JoinRequests from "../views/JoinRequests/JoinRequests.vue";

import ViewCustomer from "../views/Customer/ViewCustomer.vue";

import Objection from "../views/Objection/Objection.vue";

import ViewClassification from "../views/Classification/ViewClassification.vue";

import AddClassification from "../views/Classification/AddClassification.vue";
import EditClassification from "../views/Classification/AddClassification.vue";

import Setting from "../views/Settingg/Setting.vue";

import Report from "../views/Report/Report.vue";
import ReportStores from "../views/Report/ReportStores.vue";
import ReportClassification from "../views/Report/ReportClassification.vue";
import ReportCustomer from "../views/Report/ReportCustomer.vue";
import ReportRate from "../views/Report/ReportRate.vue";

import Dashboard from "../views/Dashboard/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/view-stores",
        name: "view-stores",
        component: ViewStores,
    },
    {
        path: "/view-stores-unactive",
        name: "view-stores-unactive",
        component: ViewStoresUnactive,
    },
    {
        path: "/store/:id",
        name: "store",
        component: Store,
    },
    {
        path: "/product/:id/:store_id",
        name: "product",
        component: Product,
    },
    {
        path: "/join-requests",
        name: "join-requests",
        component: JoinRequests,
    },
    {
        path: "/view-customer",
        name: "view-customer",
        component: ViewCustomer,
    },
    {
        path: "/view-objection",
        name: "view-objection",
        component: Objection,
    },
    {
        path: "/view-classification",
        name: "view-classification",
        component: ViewClassification,
    },
    {
        path: "/add-classification",
        name: "add-classification",
        component: AddClassification,
    },
    {
        path: "/edit-classification/:id",
        name: "edit-classification",
        component: EditClassification,
    },
    {
        path: "/setting",
        name: "setting",
        component: Setting,
    },
    {
        path: "/report",
        name: "report",
        component: Report,
    },
    {
        path: "/report-stores",
        name: "report-stores",
        component: ReportStores,
    },
    {
        path: "/report-classification",
        name: "report-classification",
        component: ReportClassification,
    },
    {
        path: "/report-customer",
        name: "report-customer",
        component: ReportCustomer,
    },
    {
        path: "/report-rate",
        name: "report-rate",
        component: ReportRate,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
