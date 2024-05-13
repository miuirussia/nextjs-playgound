{ stdenv, cacert, lib, nodePackages }:

stdenv.mkDerivation {
  name = "playground-deps";
  src = ./.;

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
}
