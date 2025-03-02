// Created by iWeb 3.0.4 local-build-20250302

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id10" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="188" height="216" style="height: 216px; left: 256px; position: absolute; top: 1166px; width: 188px; z-index: 1; "><param name="src" value="Media/banana-dance.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id10" type="video/quicktime" width="188" height="216" style="height: 216px; left: 256px; position: absolute; top: 1166px; width: 188px; z-index: 1; "><param name="src" value="Home_files/banana-dance-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/banana-dance.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id10" type="video/quicktime" width="188" height="216" data="Media/banana-dance.mov" style="height: 216px; left: 256px; position: absolute; top: 1166px; width: 188px; z-index: 1; "><param name="src" value="Media/banana-dance.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id11');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
