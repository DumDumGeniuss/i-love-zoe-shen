      var targetDate = new moment('2019-01-20', 'YYYY-MM-DD hh:mm');
      var countdownInterval = setInterval(function () {
        var countElem = document.getElementById('count');
        secondsDiff = targetDate.diff(new moment(), 'seconds');
        if (secondsDiff > 0) {
          countElem.innerHTML = targetDate.diff(new moment(), 'seconds');
        } else {
          document.getElementById('count-down-text').innerHTML = 'Messi Yang will buy a switch before Zoe Shen comes to Sydney, te amo mi novia y feliz cumpleanos!<br/>Messi <3 Zoe Shen';
          document.getElementById('count-down-circle').style.display = 'none';
          var switchImageElem = document.getElementById('switch-image');
          switchImageElem.style.display = 'block';
          switchImageElem.src = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSr8urXBqWXY3OK3UI_xMJqB6uyOjIUHLyo7kiUUjWGjXXR1tIyEB_4T17wdpVnvINdT8Ro4na2eyU8pPvq8ZLQBYp3ndZq5cLAEl2ARKK_GLI8LhiGHrGjGQ&usqp=CAE';
          clearInterval(countdownInterval);
        }
      }, 1000);
