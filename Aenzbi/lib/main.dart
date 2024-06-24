import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'screens/pos_screen.dart';
import 'screens/inventory_screen.dart';
import 'screens/settings_screen.dart';

void main() {
  runApp(AenzbiApp());
}

class AenzbiApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aenzbi Business Management System',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/pos': (context) => POSScreen(),
        '/inventory': (context) => InventoryScreen(),
        '/settings': (context) => SettingsScreen(),
      },
    );
  }
}
