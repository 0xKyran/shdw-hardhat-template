{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_20
    pkgs.bash
    pkgs.zsh
  ];

  shell = pkgs.zsh;
}
