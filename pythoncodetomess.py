# *- encoding:utf-8 -*
from time import sleep as s

def main(flag=''):
    chars = ['.  ','.. ','...',]
    index = 0
    timer = 0
    aburrimiento = input('Inserte su mas grande deseo\n> ')
    if aburrimiento or flag != '':
        while(True):
            aburrimiento = aburrimiento.lower()
            if index == len(chars):
                index = 0
            s(0.15)
            print('loading{}'.format(chars[index]), end="\r")
            index += 1
            timer += 1
            if timer > 100 and flag == '':
                if 'morir' in aburrimiento:
                    print('\nYa veo, tal vez deberias hacerlo')
                else:
                    print('\nDesear {} parece demasiado tedioso, piensa otra cosa'.format(aburrimiento))
                raw = input('Deseas volver a jugar? (Y/N)\n> ')
                chooser(raw)
                
def chooser(raw):
    if raw == 'Y':
        main()
    elif raw == 'N':
        print('Adios!')
        exit()
    elif raw.lower() == 'dejame salir':
        print('Why I\'m still here, just to suffer?')
        s(3)
        main(flag='neverendingsuffering')
    else:
        raw = input('Input no valido, vuelve a intentar(Y/N)\n> ')        
        chooser(raw)  

if __name__ == '__main__':
    main()