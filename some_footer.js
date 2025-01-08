document.writeln("<!--音乐播放器-->");
document.writeln(
  "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css'>"
);
document.writeln(
  "<script src='https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js'></script>"
);
document.writeln(
  "<script src='https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js'></script>"
);
document.writeln(
  "<meting-js server='netease' type='playlist' id='8678976444' theme='#339981' fixed='true' preload='none' autoplay='false' loop='all' order='random' volume='0.3'></meting-js>"
);
document.writeln("<!--初始化时隐藏歌词7923388379--><script>");
document.writeln("ap = null;");
document.writeln(
  "Object.defineProperty(document.querySelector('meting-js'), 'aplayer', {"
);
document.writeln("    set: function(aplayer) {");
document.writeln("        ap = aplayer;");
document.writeln("        ap_init();");
document.writeln("    }");
document.writeln("});");
document.writeln("function ap_init() {");
document.writeln("    $('.aplayer-body').addClass('my-hide');");
document.writeln("    ap.lrc.hide();");
document.writeln("    ap.on('play', () => ap.lrc.show());");
document.writeln("    ap.on('pause', () => ap.lrc.hide());");
document.writeln("}");
document.writeln("<!--石蒜立牌-->");
document.writeln("</script>");
document.writeln("<meta name='viewport' content='width=device-width'>");
document.writeln("<style>");
document.writeln("html {");
document.writeln("  background:none;");
document.writeln("}");
document.writeln("html .sakana-box {");
document.writeln("  position: fixed;");
document.writeln("  right: 0;");
document.writeln("  bottom: 0;");
document.writeln("  transform-origin: 100% 100%;");
document.writeln("}");
document.writeln("</style>");
document.writeln("<div class='sakana-box'></div>");
document.writeln("<script src='https://cdn.jsdelivr.net/npm/sakana'></script>");
document.writeln(
  "<script src='https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.5/mobile-detect.min.js'></script>"
);
document.writeln("<script>");
document.writeln("var md = new MobileDetect(window.navigator.userAgent);");
document.writeln("");
document.writeln("if (!md.phone()) {");
document.writeln("  Sakana.setMute(false);");
document.writeln("  Sakana.init({");
document.writeln("    el: '.sakana-box',");
document.writeln("    character: 'takina',");
document.writeln("    scale: 0.5,");
document.writeln("    canSwitchCharacter: true,");
document.writeln("    onSwitchCharacter(character){");
document.writeln("      console.log(`${character} dayo~`);");
document.writeln("    },");
document.writeln("  });");
document.writeln("}");
document.writeln("</script>");
