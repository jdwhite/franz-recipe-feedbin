"use strict";

module.exports = Franz => {
  const getMessages = () => {
    const totalMessages = document.querySelector("body > div.app-wrap.fade.show > div.feeds-column.app-panel.ui-resizable > div.inner-column > div.feeds.showing-audio-player.ui-droppable > ul > li.collection-all > a > span.count-wrap > span").innerHTML;
    Franz.setBadge(totalMessages);
  };

  Franz.loop(getMessages);

};