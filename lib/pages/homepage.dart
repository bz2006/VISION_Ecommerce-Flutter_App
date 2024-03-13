import "package:flutter/material.dart";


class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return  SafeArea(
        child: Scaffold(
      backgroundColor: const Color.fromARGB(255, 255, 255, 255),
      body: Column(
        children: [
          const Text(
            "Home Page",
            style: TextStyle(color: Colors.black, fontSize: 120),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, "/login");
            },
            child: const Text("Navigate to Login Page"),
          )
        ],
      ),
    ));
  }
}
