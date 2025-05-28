# Imagem base
FROM node:20-alpine

# Instala dependências adicionais
RUN apk add --no-cache bash openssl git

# Diretório de trabalho
WORKDIR /usr/src/app

# Copia o schema antes de instalar dependências
COPY prisma ./prisma

# Copia dependências
COPY package*.json ./

# Instala Nest CLI globalmente e dependências
RUN npm install -g @nestjs/cli \
    && npm install --legacy-peer-deps

# Copia o restante dos arquivos
COPY . .

# Exponha a porta padrão
EXPOSE 3000

# Comando padrão
CMD ["npm", "run", "start:dev"]
