import 'package:batufo/engine/game_widget.dart';
import 'package:batufo/game/client_game.dart';
import 'package:batufo/states/user_state.dart';
import 'package:batufo/universe.dart';
import 'package:batufo/widgets/hud/hud_widget.dart';
import 'package:batufo/widgets/hud/score_widget.dart';
import 'package:flutter/material.dart';

class GameOutcomeWidget extends StatelessWidget {
  final Universe universe;
  final ClientGame game;
  final GameOutcomes gameOutcome;
  final int score;

  const GameOutcomeWidget({
    @required this.game,
    @required this.gameOutcome,
    @required this.score,
    @required this.universe,
  }) : super();

  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(children: [
        GameWidget(game),
        Container(
          color: Colors.black.withAlpha(0xAA),
          child: Center(child: _overlay(context)),
        ),
        HudWidget(universe: universe)
      ]),
    );
  }

  Widget _overlay(BuildContext context) {
    switch (gameOutcome) {
      case GameOutcomes.Won:
        return GameWonWidget(
          score: score,
          universe: universe,
        );
      case GameOutcomes.Lost:
        return GameOverWidget(
          score: score,
          universe: universe,
        );
      case GameOutcomes.None:
        return GameInterruptedWidget();
      default:
        return GameInterruptedWidget();
    }
  }
}

class GameOverWidget extends StatelessWidget {
  final int score;
  final Universe universe;
  const GameOverWidget({@required this.universe, @required this.score})
      : super();

  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          '😭 You Lost 😭',
          style: TextStyle(
            color: Colors.redAccent,
            fontSize: 18,
          ),
        ),
        ScoreWidget(
          score: score,
          fontSize: 18,
        ),
        FinishedGameActionWidget(
          message: 'Play Again',
          action: universe.userReplayLevel,
        ),
        FinishedGameActionWidget(
          message: 'Play Other Level',
          action: universe.userPlayOtherLevel,
        ),
      ],
    );
  }
}

class GameWonWidget extends StatelessWidget {
  final int score;
  final Universe universe;
  const GameWonWidget({@required this.universe, @required this.score})
      : super();
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          '🎉 You Won 🎉',
          style: TextStyle(
            color: Colors.greenAccent,
            fontSize: 18,
          ),
        ),
        ScoreWidget(
          score: score,
          fontSize: 18,
        ),
        FinishedGameActionWidget(
          message: 'Play Again',
          action: universe.userReplayLevel,
        ),
        FinishedGameActionWidget(
          message: 'Play Other Level',
          action: universe.userPlayOtherLevel,
        ),
      ],
    );
  }
}

class FinishedGameActionWidget extends StatelessWidget {
  final String message;
  final VoidCallback action;

  const FinishedGameActionWidget({this.message, this.action}) : super();

  Widget build(BuildContext context) {
    return RaisedButton(
      child: Text(message),
      onPressed: action,
    );
  }
}

class GameInterruptedWidget extends StatelessWidget {
  Widget build(BuildContext context) {
    return Text(
      '😟 What happened? 😟',
      style: TextStyle(
        color: Colors.blueAccent,
        fontSize: 18,
      ),
    );
  }
}
