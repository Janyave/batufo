import 'dart:async';
import 'dart:io';

import 'package:batufo/diagnostics/logger.dart';
import 'package:batufo/engine/images.dart';
import 'package:batufo/engine/world_position.dart';
import 'package:batufo/game/assets/assets.dart';
import 'package:batufo/game_props.dart';
import 'package:batufo/widgets/game/game_widget.dart';
import 'package:batufo/widgets/restart/restart_widget.dart';
import 'package:flutter/material.dart';

Future<void> main() async {
  Log.activateConsole();
  Log.rootLevel = Level.FINEST;
  // Log.messageFilter = (String s) => s.contains('MyApp');

  WorldPosition.tileSize = GameProps.tileSize;
  WidgetsFlutterBinding.ensureInitialized();
  await Images.instance.load([
    assets.floorTiles.imagePath,
    assets.player.imagePath,
    assets.thrust.imagePath,
    assets.wallMetal.imagePath,
    assets.bulletExplosion.imagePath,
    assets.skull.imagePath,
  ]);
  const level = 'large';
  final serverIP = Platform.isAndroid ? '192.168.1.7' : 'localhost';

  runApp(
    RestartWidget(
      child: GameWidget(
        level: level,
        serverIP: serverIP,
      ),
    ),
  );
}