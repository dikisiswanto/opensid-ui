import 'tw-elements';
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable no-undef */
const setChart = () => {
  let showStatus = true;
  let charts;

  function switchType(type, alpha) {
    charts.update({
      chart: {
        options3d: {
          alpha,
        },
      },
      series: [{
        type,
      }],
    });
  }

  function showZeroValue(show = false) {
    if (show) {
      $('.zero').parent().show();
    } else {
      $('.zero').parent().hide();
    }
  }

  // eslint-disable-next-line no-unused-vars
  function showHideToggle() {
    $('#showData').click();
    showZeroValue(showStatus);
    showStatus = !showStatus;
    if (showStatus) $('#showZero').text('Tampilkan Nol');
    else $('#showZero').text('Sembunyikan Nol');
  }

  $(document).ready(() => {
    if ($('#peserta_program').length) {
      $('#peserta_program').DataTable({
        processing: true,
        serverSide: true,
        pageLength: 10,
        order: [],
        ajax: {
          url: bantuanUrl,
          type: 'POST',
          data: {
            stat: $('#stat').val(),
          },
        },
        // Set column definition initialisation properties.
        columnDefs: [{
          targets: [0, 3], // first column / numbering column
          orderable: false, // set not orderable
        }],
        language: {
          url: `${BASE_URL}/assets/bootstrap/js/dataTables.indonesian.lang`,
        },
        drawCallback: () => {
          $('.dataTables_paginate > .pagination').addClass('pagination-sm no-margin');
        },
      });
    }

    if ($('#statistics').length) {
      showZeroValue(false);
      const categories = [];
      const data = [];
      for (const stat of dataStats) {
        if (stat.nama !== 'TOTAL' && stat.nama !== 'JUMLAH' && stat.nama !== 'PENERIMA') {
          const filteredData = [stat.nama, parseInt(stat.jumlah, 10)];
          categories.push(stat.nama);
          data.push(filteredData);
        }
      }

      charts = new Highcharts.Chart({
        chart: {
          renderTo: 'statistics',
          options3d: {
            enabled: enable3d,
            alpha: 45,
            beta: 10,
          },
        },
        title: 0,
        yAxis: {
          showEmpty: false,
          title: {
            text: 'Jumlah Populasi',
          },
        },
        xAxis: {
          categories,
        },
        plotOptions: {
          series: {
            colorByPoint: true,
          },
          column: {
            pointPadding: -0.1,
            borderWidth: 0,
            showInLegend: false,
            depth: 50,
            viewDistance: 25,
          },
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: false,
            depth: 30,
            innerSize: 30,
          },
        },
        legend: {
          enabled: true,
        },
        series: [{
          type: 'pie',
          name: 'Jumlah Populasi',
          shadow: 1,
          border: 1,
          data,
        }],
      });

      $('#showData').click(() => {
        $('tr.more').show();
        $('#showData').hide();
        showZeroValue(false);
      });

      $('.button-switch').click(function () {
        const chartType = $(this).data('type');
        const alpha = chartType === 'pie' ? 45 : 20;
        $(this).addClass('is-active');
        $(this).siblings('.button-switch').removeClass('is-active');
        switchType(chartType, alpha);
      });

      $('#showZero').click(() => showHideToggle());
    }
  });
};

$(document).ready(() => {
  $('.owl-carousel').each(function () {
    const slideItems = $(this).data('itemsnumber') || 1;
    $(this).owlCarousel({
      loop: true,
      items: slideItems,
      autoplay: true,
      dots: true,
      margin: (slideItems > 1 ? 12 : 0),
      animateOut: 'fadeOutLeft',
      animateIn: 'fadeInRight',
      autoplayHoverPause: true,
    });
  });
  if ($('.slider-nav').length) {
    const owl = $('.slider .owl-carousel');
    $('.slider-nav-prev').click(() => {
      owl.trigger('prev.owl.carousel');
    });

    $('.slider-nav-next').click(() => {
      owl.trigger('next.owl.carousel');
    });
  }
  setChart();
});
