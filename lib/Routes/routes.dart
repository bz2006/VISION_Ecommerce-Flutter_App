import 'package:flutter/material.dart';

import "../pages/homepage.dart";
import "../pages/auth/login.dart";
// import "../pages/auth/signup.dart";
// import "../pages/productpage.dart";
// import "../pages/shoppage.dart";




Map<String, WidgetBuilder> routes = {
  '/': (context) => const HomePage(),
  '/login': (context) => const LoginPage(),
};