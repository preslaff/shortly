      let hostname = location.hostname;
      let port = location.port;
      var clipboard = new ClipboardJS(".btn", {
        text: function(trigger) {
        const query = trigger.getAttribute('data-clipboard-target');
        const target = document.querySelector(query);
        return hostname+":"+port+target.getAttribute("href");
        }
      });

      clipboard.on('success', function (e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
      });

      clipboard.on('error', function (e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
      });