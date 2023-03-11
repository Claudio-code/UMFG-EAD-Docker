# Indice

- [Instalar o Docker no WSL2-Ubuntu](#instalar-o-docker-no-WSL2)
- [Instalar o docker no Windows](#instalar-o-docker-no-windows)
- [Instalar o nodejs no WSL2-Ubuntu](#queue)
- [Instalr o podman no WSL2-Ubuntu](#deck)


<br>

## Sobre

- Esse repositorio contem os materiais de apoio para os alunos do curso livre de Docker.
  - Na pasta banco-de-dados contem exemplos de como subir todos os bancos mais populares em um conteiner do docker.
  - Na pasta exemplos-com-frameworks-de-mercado contem os exemplos de como criar um ambiente de desenvolvimento com algumas das tecnologias mais usadas no mercado como golang, php, nodejs e java.

<br>

<br><hr><br>

<a id="instalar-o-docker-no-WSL2"></a>
# Instalar o Docker no WSL2

- Para instalar o docker direto no WSL2 abra aplicativo o Windows terminal na distribuição de linux que você instalou cole e execute essa sequencia de comandos:

> **:warning:**
> Para instalar o docker no WSL2 você precisa ter o Windows Original e precisa habilitar o systemd na distribuição instalada, para isso siga os passos da documentação da Microsoft: https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/

### 1. 
```bash
sudo apt-get update && sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release -y
```

### 2. 
```bash
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

### 3. 
```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 4. 
```bash
sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-compose -y && sudo usermod -aG docker ${USER}
```

<br><hr><br>

<a id="instalar-o-docker-no-windows"></a>
# Instalar o Docker no Windows 10/11

- Para instalar o Docker Desktop para Windows e Mac basta baixar o instalador no site da feramenta: https://www.docker.com/products/docker-desktop/

> **:warning:**
> Para instalar o docker no Windows você precisa ter a versão PRO do sistema porque o Docker vai usar o Hiper-V para virtualizar um volume de linux.