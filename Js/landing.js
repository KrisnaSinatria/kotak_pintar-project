//button faq
document.querySelectorAll('.buttonImg').forEach(function (buttonImg) {
    buttonImg.addEventListener('click', function () {
  
      
      var question = this.closest('.cursor-pointers');
      var answer = question.nextElementSibling;
      var toggleButton = this.querySelector('.toggleButton');
      var groupContainer = question.closest('.group');
  
      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        toggleButton.classList.add('rotate-90', 'color-button-faq');
       
      } else {
        answer.classList.add('hidden');
        toggleButton.classList.remove('rotate-90', 'color-button-faq');
      
      }
    });
  });
  
  
  // Hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  
  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
  });
  
  
  // Klik di luar hamburger
  window.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.add('hidden');
    }
  
  });


  const swiperss = new Swiper(".mySwiperss", {
    grabCursor:true,
    slidesPerView: 2,
    spaceBetween: 15,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable:true,
    },
    
  
    breakpoints:{
      640:{
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides:false,
      },
      768:{
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides:false,
      },
    }
  });



  window.Apex = {
    chart: {
      foreColor: '#ccc',
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      theme: 'dark'
    },
    grid: {
      borderColor: "rgba(255, 255, 255, 0.2)"
      
    }
  };



  var options = {
    series: [26, 20, 20, 10, 24],
    labels: ['gambar', 'video', 'document', 'apk', 'kosong'],
    chart: {
    type: 'donut',
  },
  colors: ['#B061FF', '#2FB3E3', '#FFC418', '#E84949', '#0A1C28'],
  stroke: {
    show: false,
    width: 0
  },
  plotOptions: {
    pie: {
        donut: {
            size: '70%',
            labels: {
                show: true,
                name: {
                    show: true,
                    fontSize: '22px',
                    fontWeight: 'bold',
                    fontFamily: 'Urbanist',
                },
                value: {
                    show: true,
                    fontSize: '24px',
                    fontWeight: 'bold',
                    fontFamily: 'Urbanist',
                    formatter: function (val) {
                        return val + "%";
                    }
                },
                total: {
                    show: true,
                    showAlways: true,
                    label: 'Terpakai',
                    fontSize: '14px',
                    fontWeight: 'medium',
                    fontFamily: 'Urbanist',
                    opacity: 0.3,
                    formatter: function (w) {
                        return w.globals.seriesTotals.reduce((a, b) => {
                            return 65
                        }) + "%";
                    }
                }
            }
        }
    }
  },
  legend: {
    show: false 
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#donut"), options);
  chart.render();
  
    
  var options = {
    series: [26, 20, 20, 10, 24],
    labels: ['gambar', 'video', 'document', 'apk', 'kosong'],
    chart: {
    type: 'donut',
    // height: '100%',
  },
  colors: ['#B061FF', '#2FB3E3', '#FFC418', '#E84949', '#0A1C28'],
  stroke: {
    show: false,
    width: 0
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    pie: {
        donut: {
            size: '65%',
            labels: {
                show: true,
                name: {
                    show: true,
                    fontSize: '22px',
                    fontWeight: 'bold',
                    fontFamily: 'Urbanist',
                },
                value: {
                    show: true,
                    fontSize: '14px',
                    offsetY: -4, 
                    fontWeight: 'bold',
                    fontFamily: 'Urbanist',
                    formatter: function (val) {
                        return val + "%";
                    }
                },
                total: {
                    show: true,
                    showAlways: true,
                    label: 'Terpakai',
                    fontSize: '10px',
                    fontWeight: 'medium',
                    fontFamily: 'Urbanist',
                    opacity: 0.3,
                    formatter: function (w) {
                        return w.globals.seriesTotals.reduce((a, b) => {
                            return 65
                        }) + "%";
                    }
                }
            }
        }
    }
  },
  legend: {
    show: false 
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#donut2"), options);
  chart.render();



  var optionsBar = {
    chart: {
      height: '100%',
      type: 'bar',
      
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px', // Ukuran font label sumbu Y
          fontFamily: 'Urbanist',
          fontWeight: 400
        },
      },
      min: 0, // Nilai minimum sumbu Y
      max: 100, // Nilai maksimum sumbu Y
      tickAmount: 5, // Jumlah interval pada sumbu Y
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        horizontal: false,
         endingShape: 'rounded',
         borderRadius: 5,
         borderRadiusApplication: 'end',
      },
    },
    series: [{
      name: 'unggah file',
      data: [60, 74, 43, 75, 70, 38, 57, 30, 76, 56, 77, 28 ]
    }, {
      name: 'berbagi file',
      data: [25, 29, 49, 37, 42, 53, 28, 32, 40, 55, 70, 50]
    }, ],
    stroke: {
      show: false,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des',],
      labels: {
        style: {
          colors: '#919191'
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      enabled: false,
     
    },
    colors: ['#2FB3E3', '#2F6CE3'], 
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'right',
     
    }
  
  }
  
  var chartBar = new ApexCharts(
    document.querySelector("#withdrawn2"),
    optionsBar
  );
  
  chartBar.render();


