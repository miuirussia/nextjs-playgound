{ stdenv, cacert, lib, nodePackages, nodejs }:
# with import <nixpkgs> {};

let
  version = "0.1.0";

  nix-filter = import ./nix-filter;

  nodeModules = stdenv.mkDerivation {
    name = "playground-deps-${version}.tar.gz";
    src = nix-filter.filter {
      root = ./.;
      include = [
        ./package.json
        ./pnpm-lock.yaml
        "patches"
      ];
    };

    nativeBuildInputs = [ nodePackages.pnpm ];
    dontConfigure = true;

    buildPhase = ''
      runHook preBuild

      export SOURCE_DATE_EPOCH=1
      export NODE_EXTRA_CA_CERTS="${cacert}/etc/ssl/certs/ca-bundle.crt"
      pnpm i --frozen-lockfile --node-linker=hoisted

      runHook postBuild
    '';

    installPhase = ''
      runHook preInstall

      rm node_modules/.modules.yaml
      tar -czf $out --owner=0 --group=0 --numeric-owner --format=gnu \
        --mtime="@$SOURCE_DATE_EPOCH" --sort=name --hard-dereference \
        node_modules

      runHook postInstall
    '';

    outputHashMode = "flat";
    outputHashAlgo = "sha256";
    outputHash = "sha256-y3N/4eN5uvaz48qvY8Hqyfg4zgko0JvIiFmuV82Ysfc=";
  };
in stdenv.mkDerivation {
  pname = "playground-frontend";
  inherit version;
  src = ./.;

  nativeBuildInputs = [ nodejs nodePackages.pnpm ];
  dontConfigure = true;

  buildPhase = ''
    runHook preBuild

    tar xf ${nodeModules}
    patchShebangs --build node_modules
    pnpm build

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    cp -r public $out/public
    cp -r .next/standalone $out
    cp -r .next/static $out/.next/static

    runHook postInstall
  '';
}
