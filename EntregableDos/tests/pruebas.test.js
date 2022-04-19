
//No borrar este código.
const {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    crearInstanciaPersona,
    Persona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
    
} = require('../tarea');


describe('suma(x, y)', function() {
    it('Deberia devolver la suma de los dos argumentos', function() {
      expect(suma(5, 5)).toBe(10);
      expect(suma(-1, 5)).toBe(4);
    });
  });


describe('sonIguales(x, y)', function() {
    it('Deberia devolver true si los argumentos son iguales y sino false', function() {
      expect(sonIguales(15, 15)).toBe(true);
      expect(sonIguales(90, 50)).toBe(false);
      expect(sonIguales('test', 'test')).toBe(true);
    });
});

describe('tienenMismaLongitud(str1, str2)', function() {
    it('Deberia devolver true si los strings tienen la misma longitud y sino false', function() {
      expect(tienenMismaLongitud('hi', 'there')).toBe(false);
      expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
    });
  });

  describe('esPositivo(numero)', function() {
    it('Debería devolver el string Es positivo ó Es negativo según corresponda', function() {
      expect(esPositivo(0)).toBe(false);
      expect(esPositivo(23)).toBe('Es positivo');
      expect(esPositivo(-2)).toBe('Es negativo');
    });
  });

  describe('colors(color)', function() {
    it('Debería regresar \'This is {color}\'', function() {
      expect(colors("blue")).toBe('This is blue');
      expect(colors("red")).toBe('This is red');
      expect(colors("green")).toBe('This is green');
      expect(colors("orange")).toBe('This is orange');
    });
    it('Debería devolver \'Color not found\' si no hay argumentos o no es el color esperado', function() {
      expect(colors()).toBe('Color not found');
      expect(colors("pink")).toBe('Color not found');
    });
  });

  describe('fizzBuzz(num)', function() {
    it('Debería regresar fizz si es divisible por 3', function() {
      expect(fizzBuzz(9)).toBe('fizz');
    });
    it('Deberia regresar buzz si es divisible por 5', function() {
      expect(fizzBuzz(10)).toBe('buzz');
    });
    it('Debería regresar fizzbuzz si es divisible por 3 y 5', function() {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Debería regresar num si no es divisible por 3 o 5', function() {
      expect(fizzBuzz(4)).toBe(4);
    });
  });

  describe('devolverPrimerElemento(arr)', function() {
    it('Debe regresar el primer elemento del arreglo', function() {
      expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
      expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
    });
  });

  describe('agregarItemAlFinalDelArray(arr, item)', function() {
    it('Debe regresar el arreglo con el item agregado al final del array', function() {
      expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
      expect(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
      expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
    });
  });


  describe('nuevoUsuario(nombre, email, password)', function() {
    it('Debe regresar un nuevo objeto usuario con nombre, email, y password que sean iguales a los argumentos', function() {
      const user = {
        nombre: 'Jhon',
        email: 'jhon@email.com',
        password: 'correcthorsebatterystaple',
      };
      expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(user);
      const user2 = {
        nombre: 'Samuel',
        email: 'samuel@email.com',
        password: 'password',
      };
      expect(nuevoUsuario(user2.nombre, user2.email, user2.password)).toEqual(user2);
    });
  });


  describe('verificarPassword(user, password)', function() {
    it('Debe regresar true si password coincide', function() {
      const user = {
        password: 'Me encanta JS!',
      };
      const password = 'Me encanta JS!';
      expect(verificarPassword(user, password)).toBe(true);
    });
    it('Debe regresar false si no coincide el password', function() {
      const user = {
        password: 'Me encanta JS!',
      };
      const password = 'Hacker time!';
      expect(verificarPassword(user, password)).toBe(false);
    });
  });

  
describe('actualizarPassword(user, password)', function() {
    it('Debe regresar el objeto usuario con el password actualizado', function() {
      const user = {
        password: 'Me encanta JS!',
      };
      const password = 'Me encanta JS mucho más!';
      expect(actualizarPassword(user, password).password).toBe(password);
    });
  });

  describe('agregarAmigo(user, newFriend)', function() {
    it('Debe regresar un nuevo amigo al final de la propiedad amigos', function() {
      const user = {
        amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
      };
      const newFriend = 'Shay';
      expect(agregarAmigo(user, 'Shay').amigos.pop()).toBe('Shay');
    });
  });

  
describe('pasarUsuarioAPremium(users)', function() {
    it('Debe regresar el arreglo users con la propiedad esPremium en true', function() {
      const users = [
        { esPremium: false },
        { esPremium: false },
        { esPremium: false },
        { esPremium: false },
        { esPremium: false },
      ];
      const updatedUsers = [
        { esPremium: true },
        { esPremium: true },
        { esPremium: true },
        { esPremium: true },
        { esPremium: true },
      ];
      expect(pasarUsuarioAPremium(users)).toEqual(updatedUsers);
    });
  });

  describe('sumarLikesDeUsuario(user)', function() {
    it('Debe regresar la suma de los likes de todos los posts de user', function() {
      const user = {
        usernombre: 'Jhon Doe',
        password: 'JavaScript es genial!',
        posts: [
          {
            id: '1',
            title: 'Aventuras en JS!',
            likes: 10
          },
          {
            id: '2',
            title: 'Soy Henry!',
            likes: 100
          },
          {
            id: '3',
            title: 'Qué es un JavaScript?',
            likes: 35
          },
          {
            id: '4',
            title: 'JS Objects for Dummies',
            likes: 42
          },
          {
            id: '5',
            title: 'Educación online',
            likes: 99
          },
        ],
      };
      expect(sumarLikesDeUsuario(user)).toBe(286);
    });
  });


  describe('crearInstanciaPersona()', function() {
	it('Debe regresar una nueva instancia de Persona', function() {
		expect(crearInstanciaPersona("Juan", "Pérez", 22, "Saavedra 123")).toBeInstanceOf(Persona);
	});
});

describe('sumarArray(cb)', function() {
	it('Debe pasar la suma de todos los numeros del arreglo a cb', function(done) {
		sumarArray([1, 2, 3, 4, 5], function(sum) {
			expect(sum).toBe(15);
			done();
		});
	});
});

describe('copiarEach(arr, cb)', function() {
	it('Debe pasar todos los items del arreglo a cb', function() {
		const nums = [];
		copiarEach([1, 2, 3, 4, 5], function(num) {
			nums.push(num);
		});
		expect(nums).toEqual([1, 2, 3, 4, 5]);
	});
});


describe('operacionMatematica(n1, n2, cb)', function() {
	it('Debe  regresar la función pasándole los argumentos recibidos', function() {
		const cb = jest.fn();
		operacionMatematica(100, 20, cb);
		expect(cb).toHaveBeenCalled();
	});
});

describe('filter(array)', function() {
	it('Debe regresar un arreglo que contiene las palabras que empiezan con "a"', function() {
		let array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo'];
		expect(filter(array)).toEqual(["abajo", "alerta", "azteca", "arbol"]);
	});

    it('Debe regresar un arreglo vacío si no hay palabras que empiecen con "a', function() {
		let array = ['pablo', 'pera', 'escalera', 'indice', 'buzo'];
		expect(filter(array)).toEqual([]);
	});

    it('Debe regresar un arreglo vacío si la entrada es un array vacío', function() {
		let array = [];
		expect(filter(array)).toEqual([]);
	});
});